const Middleware = ({ dispatch }) => next => action => {
    console.log(action.type)
    if (action.type === 'FORM_SUBMIT') {
        console.log('Before fetch')
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(action.formdata),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => dispatch({ type: "SUBMITTED", responsedata: json }));
    }


    next(action);
};

export default  Middleware 