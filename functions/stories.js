export const onRequest = async ({ env }) => {
    return await getStories()

    // NAMESPACE.get(key, {cacheTtl: 3600})
    // const stories = await env.HNCR_STORIES.get("stories", { cacheTtl: 3600 })


    // await env.HNCR_STORIES.put("time", new Date().toISOString())
    // const time = await env.HNCR_STORIES.get("time")
    // // return new Response(time)
    // return new Response(JSON.stringify({ env, time }))
}

const API_URL = "https://hnrss.org/frontpage.jsonfeed?count=100"

async function getStories() {
    const init = {
        headers: {
            "content-type": "application/json;charset=UTF-8",
        },
    }
    const apiResponse = await fetch(API_URL, init)
    const stories = JSON.stringify(await apiResponse.json())
    const response = new Response(stories, init)
    response.headers.append("Cache-Control", "maxage=30")
    return response
}


// addEventListener('scheduled', event => {
//     event.waitUntil(triggerEvent(event.scheduledTime))
// })

// async function triggerEvent(scheduledTime) {
//     // Fetch some data
//     // Update API
//     console.log("cron processed")
// }