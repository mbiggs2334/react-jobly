import React from 'react';

const handleFormChanges = (func, evt) => {
    const {name, value} = evt.target;
    func(stuff => ({
        ...stuff,
        [name]: value
    }));
};

export default handleFormChanges;