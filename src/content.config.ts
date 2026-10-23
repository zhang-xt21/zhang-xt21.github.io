import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/data/blog',
    }),     //定义一个叫做blog的内容集合
            //去src/data/blog目录下加载所有的markdown文件

    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        tags: z.array(z.string()).default([]),
    }),
    //要求每篇文章必须有什么信息
    //string表示字符串，date表示日期，array表示数组
});

export const collections = { blog };