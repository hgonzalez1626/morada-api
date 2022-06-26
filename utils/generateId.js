const generateId = () =>{
    const randoms = Math.random().toString(32).substring(2);
    const dates = Date.now().toString(32);
    return randoms + dates;
};

module.exports = {
    generateId
}