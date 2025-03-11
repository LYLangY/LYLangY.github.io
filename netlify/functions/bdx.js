const zlib = require('zlib');

exports.handler = async (event, context) => {
	try {
		// 获取查询参数
		const query = event.queryStringParameters;

		// 检查是否提供了 hex 参数
		if (!query || !query.hex) {
			return {
				statusCode: 400,
				body: JSON.stringify({
					message: 'Missing hex parameter'
				}),
			};
		}

		// 将 Hex 字符串转换为 Buffer
		const buffer = Buffer.from(query.hex, 'hex');

		// 使用 zlib 解压 Brotli 数据
		const bdx = await new Promise((resolve, reject) => {
			zlib.brotliDecompress(buffer, (err, result) => {
				if (err) reject(err);
				else resolve(result.toString('utf8'));
			});
		});

		// 返回解压后的数据
		return {
			statusCode: 200,
			body: bdx
		};
	} catch (err) {
		// 捕获并返回错误
		return {
			statusCode: 201,
			body: JSON.stringify({
				message: 'Internal Server Error',
				error: err.message
			}),
		};
	}
};