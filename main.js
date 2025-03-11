// main.js

let brotliInitialized;

// 加载并初始化 brotli-wasm
async function LoadBrotli() {
    try {
        // 使用 CDN 路径（或本地路径）
        //const module = await import("https://unpkg.com/brotli-wasm@3.0.0/pkg.web/brotli_wasm.js");
        const module = await import("./brotli-wasm/brotli_wasm.js");
        await module.default(); // 等待 init() 完成
        brotliInitialized = module;
        console.log('brotli-wasm 初始化成功');
    } catch (error) {
        console.error('初始化失败:', error);
    }
}
LoadBrotli();

// 获取 DOM 元素
const hexInput = document.getElementById('hexInput');
const decompressBtn = document.getElementById('decompressBtn');
const output = document.getElementById('output');

// Hex 转 Uint8Array
function hexToUint8Array(hex) {
    if (hex.length % 2 !== 0) throw new Error('Hex 字符串长度必须为偶数');
    const bytes = new Uint8Array(hex.length / 2);
    for (let i = 0; i < hex.length; i += 2) {
        bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
    }
    return bytes;
}

// 解压按钮点击事件
decompressBtn.addEventListener('click', async () => {
    const hex = hexInput.value.trim().replace(/\s+/g, '');
    if (!hex) {
        alert('请输入 Hex 字符串');
        return;
    }

    try {
        if (!brotliInitialized) {
            throw new Error('brotli-wasm 未初始化，请稍后重试');
        }

        const { decompress } = brotliInitialized;
        const uint8Array = hexToUint8Array(hex);
        const decompressedData = decompress(uint8Array);
        const text = new TextDecoder().decode(decompressedData);
        output.textContent = text;
    } catch (error) {
        console.error('解压失败:', error);
        output.textContent = '解压失败，请检查控制台日志';
    }
});
