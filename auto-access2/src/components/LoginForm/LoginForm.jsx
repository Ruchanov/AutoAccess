import React from 'react';
import styles from './LoginForm.module.css';

const LoginForm = ({ onLogin, onToggle, username, setUsername, password, setPassword }) => {
    return (
        <form className={styles.loginForm} onSubmit={onLogin}>
            <h2 className={styles.loginTitle}>Вход в систему</h2>
            <div className={styles.inputGroup}>
                <label htmlFor="username">Имя пользователя</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="password">Пароль</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button type="submit" className={styles.loginButton}>Войти</button>
            <p className={styles.toggleForm}>
                Еще не зарегистрированы? <button type="button" onClick={onToggle}>Зарегистрироваться</button>
            </p>
        </form>
    );
};

export default LoginForm;
