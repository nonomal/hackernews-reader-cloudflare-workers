export const onRequest = async ({ env }) => {
    return new Response(JSON.stringify(env))

    // await env.HNCR_STORIES.put("time", new Date().toISOString())
    // const time = await env.HNCR_STORIES.get("time")
    // return new Response(time)
}
