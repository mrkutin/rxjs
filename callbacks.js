
(function () {
    setTimeout(function(){
      console.log('Прошла секунда');
      setTimeout(() => {
        console.log('Прошла еще секунда');
        setTimeout(() => {
          console.log('Прошла еще секунда');
          setTimeout(() => {
            console.log('Прошла еще секунда');
            setTimeout(() => {
              console.log('Прошла еще секунда');
              setTimeout(() => {
                console.log('Прошла еще секунда');
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
})();
