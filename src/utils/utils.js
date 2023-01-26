export const validatePhone = (phoneNumber) => {
    //  cree un object regex
    const myReg = /^(06|07)[0-9]{8}/;
    if (myReg.test (phoneNumber))
    {
        return(true);
    }
    else
    {
        return(false);
    }
}
    
