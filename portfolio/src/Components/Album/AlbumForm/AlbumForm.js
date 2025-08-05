import styles from './AlbumForm.module.css';


export default function AlbumForm(props){
    let {form,setForm}=props;
    return(
        // <div style={{width:'80vw' , height:'30vh' , backgroundColor:'green'}} >
        <div className={styles.main} >
            <h2 className={styles.h2}>Create an album</h2>
            <form className={styles.form}>
                <input className={styles.input} placeholder="Album Name"
                />
                <button className={styles.clear}>Clear</button>
                <button className={styles.create}>Create</button>
                
            </form>
            <button onClick={()=>setForm(!form)} className={styles.cancel}>Cancel</button>
        </div>
    )
}