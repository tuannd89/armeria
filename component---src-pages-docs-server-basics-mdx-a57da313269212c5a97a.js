(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"/94A":function(e){e.exports=JSON.parse('{"root":["index","setup"],"References":{"Community articles":"/community/articles","API documentation":"https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/index.html","Release notes":"/release-notes"},"Server":["server-basics","server-decorator","server-grpc","server-thrift","server-docservice","server-annotated-service","server-http-file","server-servlet","server-access-log","server-cors","server-sse"],"Client":["client-http","client-thrift","client-grpc","client-decorator","client-retrofit","client-custom-http-headers","client-timeouts","client-retry","client-circuit-breaker","client-service-discovery"],"Advanced":["advanced-logging","advanced-structured-logging","advanced-custom-attributes","advanced-structured-logging-kafka","advanced-unit-testing","advanced-production-checklist","advanced-zipkin","advanced-zookeeper","advanced-saml","advanced-spring-webflux-integration","advanced-dropwizard-integration"]}')},"T3+M":function(e,t,a){"use strict";a.r(t),a.d(t,"pageTitle",(function(){return i})),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return b}));var r=a("8o2o"),n=(a("q1tI"),a("7ljp")),s=a("xCMr"),i="Server basics",o={},c={pageTitle:i,_frontmatter:o},p=s.a;function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)(p,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"server-basics",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h1"},{href:"#server-basics","aria-label":"server basics permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Server basics"),Object(n.b)("h6",{className:"inlinePageToc",role:"navigation"},"Table of contents"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"#ports"}),"Ports")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"#services"}),"Services")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"#path-patterns"}),"Path patterns")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"#per-service-configuration"}),"Per service configuration")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"#ssltls"}),"SSL/TLS")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"#proxy-protocol"}),"PROXY protocol")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"#serving-http-and-https-on-the-same-port"}),"Serving HTTP and HTTPS on the same port")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"#virtual-hosts"}),"Virtual hosts")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"#getting-an-ip-address-of-a-client-who-initiated-a-request"}),"Getting an IP address of a client who initiated a request")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"#see-also"}),"See also"))),Object(n.b)("p",null,"To start a server, you need to build it first. Use ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"type://ServerBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServerBuilder.html"}),"type://ServerBuilder"),":"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"import com.linecorp.armeria.server.Server;\nimport com.linecorp.armeria.server.ServerBuilder;\n\nServerBuilder sb = Server.builder();\n// TODO: Configure your server here.\nServer server = sb.build();\nCompletableFuture<Void> future = server.start();\n// Wait until the server is ready.\nfuture.join();\n")),Object(n.b)("h2",{id:"ports",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#ports","aria-label":"ports permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Ports"),Object(n.b)("p",null,"To serve anything, you need to specify which TCP/IP port you want to bind onto:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"ServerBuilder sb = Server.builder();\n// Configure an HTTP port.\nsb.http(8080);\n// TODO: Add your services here.\nServer server = sb.build();\nCompletableFuture<Void> future = server.start();\nfuture.join();\n")),Object(n.b)("h2",{id:"services",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#services","aria-label":"services permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Services"),Object(n.b)("p",null,"Even if we opened a port, it's of no use if we didn't bind any services to them. Let's add some:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import com.linecorp.armeria.common.HttpRequest;\nimport com.linecorp.armeria.common.HttpResponse;\nimport com.linecorp.armeria.common.HttpStatus;\nimport com.linecorp.armeria.common.MediaType;\nimport com.linecorp.armeria.common.MediaTypeNames;\nimport com.linecorp.armeria.common.QueryParams;\n\nimport com.linecorp.armeria.server.AbstractHttpService;\nimport com.linecorp.armeria.server.Server;\nimport com.linecorp.armeria.server.ServerBuilder;\nimport com.linecorp.armeria.server.ServiceRequestContext;\nimport com.linecorp.armeria.server.annotation.Consumes;\nimport com.linecorp.armeria.server.annotation.Default;\nimport com.linecorp.armeria.server.annotation.Get;\nimport com.linecorp.armeria.server.annotation.Param;\nimport com.linecorp.armeria.server.annotation.Post;\nimport com.linecorp.armeria.server.annotation.Produces;\nimport com.linecorp.armeria.server.logging.LoggingService;\n\nServerBuilder sb = Server.builder();\nsb.http(8080);\n\n// Add a simple \'Hello, world!\' service.\nsb.service("/", (ctx, req) -> HttpResponse.of("Hello, world!"));\n\n// Using path variables:\nsb.service("/greet/{name}", new AbstractHttpService() {\n    @Override\n    protected HttpResponse doGet(ServiceRequestContext ctx, HttpRequest req) {\n        String name = ctx.pathParam("name");\n        return HttpResponse.of("Hello, %s!", name);\n    }\n}.decorate(LoggingService.newDecorator())); // Enable logging\n\n// Using an annotated service object:\nsb.annotatedService(new Object() {\n    @Get("/greet2/:name") // `:name` style is also available\n    public HttpResponse greet(@Param("name") String name) {\n        return HttpResponse.of("Hello, %s!", name);\n    }\n});\n\n// Just in case your name contains a slash:\nsb.serviceUnder("/greet3", (ctx, req) -> {\n    String path = ctx.mappedPath();  // Get the path without the prefix (\'/greet3\')\n    String name = path.substring(1); // Strip the leading slash (\'/\')\n    return HttpResponse.of("Hello, %s!", name);\n});\n\n// Using an annotated service object:\nsb.annotatedService(new Object() {\n    @Get("regex:^/greet4/(?<name>.*)$")\n    public HttpResponse greet(@Param("name") String name) {\n        return HttpResponse.of("Hello, %s!", name);\n    }\n});\n\n// Using a query parameter (e.g. /greet5?name=alice) on an annotated service object:\nsb.annotatedService(new Object() {\n    @Get("/greet5")\n    public HttpResponse greet(@Param("name") String name,\n                              @Param("title") @Default("Mr.") String title) {\n        // "Mr." is used by default if there is no title parameter in the request.\n        return HttpResponse.of("Hello, %s %s!", title, name);\n    }\n});\n\n// Getting a map of query parameters on an annotated service object:\nsb.annotatedService(new Object() {\n    @Get("/greet6")\n    public HttpResponse greet(QueryParams params) {\n        return HttpResponse.of("Hello, %s!", params.get("name"));\n    }\n});\n\n// Using media type negotiation:\nsb.annotatedService(new Object() {\n    @Get("/greet7")\n    @Produces(MediaTypeNames.JSON_UTF_8)\n    public HttpResponse greetGet(@Param("name") String name) {\n        return HttpResponse.of(HttpStatus.OK, MediaType.JSON_UTF_8,\n                               "{\\"name\\":\\"%s\\"}", name);\n    }\n\n    @Post("/greet7")\n    @Consumes(MediaTypeNames.FORM_DATA)\n    public HttpResponse greetPost(@Param("name") String name) {\n        return HttpResponse.of(HttpStatus.OK);\n    }\n});\n\nServer server = sb.build();\nCompletableFuture<Void> future = server.start();\nfuture.join();\n')),Object(n.b)("p",null,"As described in the example, ",Object(n.b)("inlineCode",{parentName:"p"},"service()")," and ",Object(n.b)("inlineCode",{parentName:"p"},"serviceUnder()")," perform an exact match and a prefix match\non a request path respectively. ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"type://ServerBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServerBuilder.html"}),"type://ServerBuilder")," also provides advanced path mapping such as regex and\nglob pattern matching."),Object(n.b)("p",null,"Also, we decorated the second service using ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"type://LoggingService:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/logging/LoggingService.html"}),"type://LoggingService"),", which logs all requests and responses.\nYou might be interested in decorating a service using other decorators, for example to gather metrics."),Object(n.b)("p",null,"You can also use an arbitrary object that's annotated by the ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"type://@Path:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/annotation/Path.html"}),"type://@Path")," annotation\nusing ",Object(n.b)("inlineCode",{parentName:"p"},"annotatedService()"),"."),Object(n.b)("h2",{id:"path-patterns",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#path-patterns","aria-label":"path patterns permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Path patterns"),Object(n.b)("p",null,"You can use the following path patterns to map an HTTP request path to a service or a decorator."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(n.b)("p",{parentName:"th"},"Pattern")),Object(n.b)("th",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(n.b)("p",{parentName:"th"},"Example")))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(n.b)("p",{parentName:"td"},"Exact match")),Object(n.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"/foo/bar")," or ",Object(n.b)("inlineCode",{parentName:"p"},"exact:/foo/bar")))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(n.b)("p",{parentName:"td"},"Curly-brace style path variables")),Object(n.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"/users/{userId}")))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(n.b)("p",{parentName:"td"},"Colon style path variables")),Object(n.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"/list/:productType/by/:ordering")))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(n.b)("p",{parentName:"td"},"Prefix match")),Object(n.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"prefix:/files")))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(n.b)("p",{parentName:"td"},"Glob pattern")),Object(n.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"glob:/*/downloads/**")))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(n.b)("p",{parentName:"td"},"Regular expression")),Object(n.b)("td",Object.assign({parentName:"tr"},{colspan:1,rowspan:1}),Object(n.b)("p",{parentName:"td"},Object(n.b)("inlineCode",{parentName:"p"},"regex:^/files/(?<filePath>.\\*)$")))))),Object(n.b)("h2",{id:"per-service-configuration",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#per-service-configuration","aria-label":"per service configuration permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Per service configuration"),Object(n.b)("p",null,"The examples above are just mapping the path of an HTTP request on a service. If you want to set configuration\nfor a specific service, you can use fluent API:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'ServerBuilder sb = Server.builder();\nsb.route()                    // Configure the service.\n  .post("/foo/bar")           // Matched when the path is "/foo/bar" and the method is POST.\n  .consumes(MediaType.JSON)   // Matched when the "content-type" header is "application/json".\n  .produces(MediaType.JSON)   // Matched when the "accept" headers is "application/json".\n  .matchesHeaders("baz=qux")  // Matched when the "baz" header is "qux".\n  .matchesParams("quux=quuz") // Matched when the "quux" parameter is "quuz".\n  .requestTimeoutMillis(5000)\n  .maxRequestLength(8192)\n  .verboseResponses(true)\n  .build((ctx, req) -> HttpResponse.of(OK)); // Should call to finish and return to the ServerBuilder.\n')),Object(n.b)("p",null,"Or use a ",Object(n.b)("inlineCode",{parentName:"p"},"Consumer"),":"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import com.linecorp.armeria.common.HttpMethod;\n\nServerBuilder sb = Server.builder();\nsb.withRoute(builder -> builder.path("/baz") // Matched when the path is "/baz".\n                               // Matched when the method is GET or POST.\n                               .methods(HttpMethod.GET, HttpMethod.POST)\n                               ...\n                               .build((ctx, req) -> HttpResponse.of(OK)));\n')),Object(n.b)("h2",{id:"ssltls",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#ssltls","aria-label":"ssltls permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"SSL/TLS"),Object(n.b)("p",null,"You can also add an HTTPS port with your certificate and its private key files:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'ServerBuilder sb = Server.builder();\nsb.https(8443)\n  .tls(new File("certificate.crt"), new File("private.key"), "myPassphrase");\n...\n')),Object(n.b)("h2",{id:"proxy-protocol",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#proxy-protocol","aria-label":"proxy protocol permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"PROXY protocol"),Object(n.b)("p",null,"Armeria supports both text (v1) and binary (v2) versions of\n",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://www.haproxy.org/download/1.8/doc/proxy-protocol.txt"}),"PROXY protocol"),".\nIf your server is behind a load balancer such as ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://www.haproxy.org/"}),"HAProxy")," and\n",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://aws.amazon.com/elasticloadbalancing/"}),"AWS ELB"),", you could consider enabling the PROXY protocol:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"import static com.linecorp.armeria.common.SessionProtocol.HTTP;\nimport static com.linecorp.armeria.common.SessionProtocol.HTTPS;\nimport static com.linecorp.armeria.common.SessionProtocol.PROXY;\n\nServerBuilder sb = Server.builder();\nsb.port(8080, PROXY, HTTP);\nsb.port(8443, PROXY, HTTPS);\n...\n")),Object(n.b)("h2",{id:"serving-http-and-https-on-the-same-port",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#serving-http-and-https-on-the-same-port","aria-label":"serving http and https on the same port permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Serving HTTP and HTTPS on the same port"),Object(n.b)("p",null,"For whatever reason, you may have to serve both HTTP and HTTPS on the same port. Armeria is one of the few\nimplementations that supports port unification:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),"ServerBuilder sb = Server.builder();\nsb.port(8888, HTTP, HTTPS);\n// Enable PROXY protocol, too.\nsb.port(9999, PROXY, HTTP, HTTPS);\n...\n")),Object(n.b)("h2",{id:"virtual-hosts",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#virtual-hosts","aria-label":"virtual hosts permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Virtual hosts"),Object(n.b)("p",null,"Use ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"type://ServerBuilder#virtualHost(String):https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServerBuilder.html#virtualHost(java.lang.String)"}),"type://ServerBuilder#virtualHost(String)")," to configure ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Virtual_hosting#Name-based"}),"a name-based virtual host"),":"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'ServerBuilder sb = Server.builder();\n// Configure foo.com.\nsb.virtualHost("foo.com")\n  .service(...)\n  .tls(...)\n  .and() // Configure *.bar.com.\n  .virtualHost("*.bar.com")\n  .service(...)\n  .tls(...)\n  .and() // Configure the default virtual host.\n  .service(...)\n  .tls(...);\n...\n')),Object(n.b)("h2",{id:"getting-an-ip-address-of-a-client-who-initiated-a-request",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#getting-an-ip-address-of-a-client-who-initiated-a-request","aria-label":"getting an ip address of a client who initiated a request permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"Getting an IP address of a client who initiated a request"),Object(n.b)("p",null,"You may want to get an IP address of a client who initiated a request in your service. In that case,\nyou can use ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"type://ServiceRequestContext#clientAddress():https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServiceRequestContext.html#clientAddress()"}),"type://ServiceRequestContext#clientAddress()"),". But you need to configure\nyour ",Object(n.b)("a",Object.assign({parentName:"p"},{href:"type://ServerBuilder:https://javadoc.io/doc/com.linecorp.armeria/armeria-javadoc/latest/com/linecorp/armeria/server/ServerBuilder.html"}),"type://ServerBuilder")," before doing that:"),Object(n.b)("pre",null,Object(n.b)("code",Object.assign({parentName:"pre"},{className:"language-java"}),'import com.linecorp.armeria.common.util.InetAddressPredicates;\nimport com.linecorp.armeria.server.ClientAddressSource;\n\nServerBuilder sb = Server.builder();\n\n// Configure a filter which evaluates whether an address of a remote endpoint is\n// trusted. If unspecified, no remote endpoint is trusted.\n// e.g. servers who have an IP address in 10.0.0.0/8.\nsb.clientAddressTrustedProxyFilter(InetAddressPredicates.ofCidr("10.0.0.0/8"));\n\n// Configure a filter which evaluates whether an address can be used as\n// a client address. If unspecified, any address would be accepted.\n// e.g. public addresses\nsb.clientAddressFilter(address -> !address.isSiteLocalAddress());\n\n// Configure a list of sources which are used to determine where to look for\n// the client address, in the order of preference. If unspecified, \'Forwarded\',\n// \'X-Forwarded-For\' and the source address of a PROXY protocol header would be used.\nsb.clientAddressSources(ClientAddressSource.ofHeader(HttpHeaderNames.FORWARDED),\n                        ClientAddressSource.ofHeader(HttpHeaderNames.X_FORWARDED_FOR),\n                        ClientAddressSource.ofProxyProtocol());\n\n// Get an IP address of a client who initiated a request.\nsb.service("/", (ctx, res) ->\n        HttpResponse.of("A request was initiated by %s!", \n                        ctx.clientAddress().getHostAddress()));\n')),Object(n.b)("h2",{id:"see-also",style:{position:"relative"}},Object(n.b)("a",Object.assign({parentName:"h2"},{href:"#see-also","aria-label":"see also permalink",className:"anchor before"}),Object(n.b)("svg",Object.assign({parentName:"a"},{"aria-hidden":"true",focusable:"false",height:"16",version:"1.1",viewBox:"0 0 16 16",width:"16"}),Object(n.b)("path",Object.assign({parentName:"svg"},{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"})))),"See also"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object.assign({parentName:"li"},{href:"/docs/server-decorator"}),"Decorating a service"))))}b.isMDXComponent=!0},xCMr:function(e,t,a){"use strict";var r=a("Wbzz"),n=a("q1tI"),s=a.n(n),i=a("/94A"),o=a("+ejy");t.a=function(e){var t=Object(r.useStaticQuery)("1217743243").allMdx.nodes;return s.a.createElement(o.a,Object.assign({},e,{candidateMdxNodes:t,index:i,prefix:"docs",pageTitleSuffix:"Armeria documentation"}))}}}]);
//# sourceMappingURL=component---src-pages-docs-server-basics-mdx-a57da313269212c5a97a.js.map