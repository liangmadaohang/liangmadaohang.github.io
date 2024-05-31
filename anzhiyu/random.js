var posts=["2024/05/30/hello-world/","2024/05/31/建站完成并且初步配置完成/","2024/05/31/每周练-1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };