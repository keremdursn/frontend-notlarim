import React from 'react'

export const users = [
    {
        username: "kerem",
        password: "123"
    },
    {
        username: "tülinay",
        password: "232"
    }
]

function Login() {
    return (

        <div>
            <div>
                <p>Kullanıcı Adınız:</p>
                <input type="text" />
            </div>

            <div>
                <p>Şifreniz:</p>
                <input type="text" />
            </div>

            <button>Giriş Yap</button>
        </div>

    )
}

export default Login