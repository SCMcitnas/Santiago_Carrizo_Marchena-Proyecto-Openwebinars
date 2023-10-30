//Instalar
/*self.addEventListener('install', function(event){
    
    console.log('Se ha instalado correctamente');
});
*/
//Instalar con caches
self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(version)
      .then(function(cache) {
        return cache.addAll([
          'sw.html',
          'sw.js',
          'sw_register.js'
        ]);
      })
    );
});

//Activacion
self.addEventListener('activate', function(event){
    console.log('Se ha Activado correctamente');
});

//Uso de fetch
self.addEventListener('fetch', function(event){
    if(!navigator.onLine){
        event.respondWith(new Response(conole.log('Sin conexion')));
    }else{
        console.log(event.request.url);
        event.respondWith(fetch(event.request));
    }
});