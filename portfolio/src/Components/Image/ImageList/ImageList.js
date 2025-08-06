import styles from './ImageList.module.css'
import imageIcon from './imageIcon.jpeg'
import ImageForm from '../ImageForm/ImageForm'
import  goBack from './goBack.png'
import { useState } from 'react'
export default function ImageList(props){
    const [imageForm,setImageForm]=useState(false);  // render ImageForm component on the basis of true/false
    let {imageList,setImageList}=props  // go back to albumList component on the basis of imageList state variable
    return(
        <>
        {
            imageForm && <ImageForm imageForm={imageForm} setImageForm={setImageForm}></ImageForm>
        }
        <div className={styles.main}>
            <div className={styles.goBack}>
                <img className={styles.goBackImg}
                 src={goBack}
                 alt='go-back-icon'
                 onClick={()=>setImageList(!imageList)}
                 />
            </div>
           <h2 className={styles.h2}>Images in ...</h2>

           { !imageForm && <button className={styles.addImageFormBtn} onClick={()=>setImageForm(!imageForm)} >Add Image</button>}
           <div className={styles.box}>
                <div className={styles.imageBox}>
                    <img className={styles.img} src={imageIcon} alt='image'></img>
                    <p className={styles.p}>image</p>
                </div>
                <div className={styles.imageBox}>
                    <img className={styles.img} src={imageIcon} alt='image'></img>
                    <p className={styles.p}>image</p>
                </div>
                <div className={styles.imageBox}>
                    <img className={styles.img} src={imageIcon} alt='image'></img>
                    <p className={styles.p}>image</p>
                </div>
                <div className={styles.imageBox}>
                    <img className={styles.img} src={imageIcon} alt='image'></img>
                    <p className={styles.p}>image</p>
                </div>
                <div className={styles.imageBox}>
                    <img className={styles.img} src={imageIcon} alt='image'></img>
                    <p className={styles.p}>image</p>
                </div>
                <div className={styles.imageBox}>
                    <img className={styles.img} src={imageIcon} alt='image'></img>
                    <p className={styles.p}>image</p>
                </div>
                <div className={styles.imageBox}>
                    <img className={styles.img} src={imageIcon} alt='image'/>
                    <p className={styles.p}>imagfobdfobkdo kgdomgdokgoke</p>
                </div>
                <div className={styles.imageBox}>
                    <img className={styles.img} src={imageIcon} alt='image'></img>
                    <p className={styles.p}>image</p>
                </div>

                {/* <div className={styles.imageBox}>box</div>
                <div className={styles.imageBox}>box</div>
                <div className={styles.imageBox}>box</div>
                <div className={styles.imageBox}>box</div>
                <div className={styles.imageBox}>box</div>
                <div className={styles.imageBox}>box</div> */}
           </div>
        </div>
        </>
    )
}