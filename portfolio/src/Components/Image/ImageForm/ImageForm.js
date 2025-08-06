import styles from './ImageForm.module.css'

export default function ImageForm(props){
    function handleSumbitForm(){
        console.log('dffbd')
    }
    let {imageForm,setImageForm}=props;
    return (
        <div className={styles.main}>
            <h2 className={styles.h2}>Add Image to....</h2>
            <form className={styles.form} onSubmit={handleSumbitForm} >

                <input className={styles.input} placeholder='Title'/>
                <input  className={styles.input} placeholder='Image URL'/>

                <button className={styles.clear}>Clear</button>
                <button className={styles.add}>Add</button>
                <button className={styles.cancel} onClick={()=>setImageForm(!imageForm)}>Cancel</button>
            </form>
        </div>
    )
}