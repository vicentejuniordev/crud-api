const deleteUser = async (id) => {
    if(id != 2){
        console.log('user not found');
    }else{
        console.log('user deleted')
    }
};

export default deleteUser;