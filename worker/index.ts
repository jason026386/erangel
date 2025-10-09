export default {
  async fetch(request, env): Promise<Response> {
    return new Response('Hello, Erangel')
  },
} satisfies ExportedHandler<Env>
