import styles from './burger.module.css';

export default function Burger () {
    return (
        <>
        {[1,2,3].map ((el)=> (
            <span key={el} className={styles.line}/>
        ))}
        </>
    );
}