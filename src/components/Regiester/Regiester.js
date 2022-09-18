import React from 'react';

const Regiester = () => {
    return (
        <div>
            <h3>Please Regiester Now!!!</h3>
            <form>
                <input type="text" placeholder='Your name' />
                <br />
                <input type="email" placeholder='Your email' name="" id="" />
                <br />
                <input type="password" placeholder='Password' name="" id="" />
                <br />
                <input type="submit" value="Regiester" />
            </form>
        </div>
    );
};

export default Regiester;