import styles from './AlbumList.module.css';
import albumIcon from './albumIcon.png'
import AlbumForm from '../AlbumForm/AlbumForm';
import ImageList from '../../Image/ImageList/ImageList';
import { use, useState } from 'react';
export default function AlbumList(){

    const [form,setForm]=useState(false);  // setForm to render album form component on the basis of true/false
    const [imageList,setImageList]=useState(false) /// setImageList to render imageList component on the basis of selected album

    if(form)     // passing form and setForm to render ALbum list
        return <AlbumForm form={form} setForm={setForm}></AlbumForm>
    if(imageList)
        return <ImageList imageList={imageList} setImageList={setImageList}></ImageList>
    return (
        <>
        {/* <AlbumForm></AlbumForm> */}
        <div className={styles.main}>
            {/* {
                form?<AlbumForm></AlbumForm>:null
            } */}

            <h2 className={styles.h2}>Your albums</h2>
            <button onClick={()=>setForm(!form)} className={styles.addAlbum}>Add album</button>

            <div className={styles.albumsBox}>

                <div className={styles.box} onClick={()=>setImageList(!imageList)} >
                    <img className={styles.img} src={albumIcon} alt='Album Icon' />
                    <h4 className={styles.h4}>Aniket</h4>
                </div>
                <div className={styles.box}>
                    <img className={styles.img} src={albumIcon} alt='Album Icon' />
                    <h4 className={styles.h4}>Aniket</h4>
                </div>
                <div className={styles.box}>
                    <img className={styles.img} src={albumIcon} alt='Album Icon' />
                    <h4 className={styles.h4}>Aniket</h4>
                </div>
                <div className={styles.box}>
                    <img className={styles.img} src={albumIcon} alt='Album Icon' />
                    <h4 className={styles.h4}>Aniket</h4>
                </div>
                <div className={styles.box}>
                    <img className={styles.img} src={albumIcon} alt='Album Icon' />
                    <h4 className={styles.h4}>Aniket</h4>
                </div>
                <div className={styles.box}>
                    <img className={styles.img} src={albumIcon} alt='Album Icon' />
                    <h4 className={styles.h4}>Aniket</h4>
                </div>
                <div className={styles.box}>
                    <img className={styles.img} src={albumIcon} alt='Album Icon' />
                    <h4 className={styles.h4}>Aniket</h4>
                </div>
                <div className={styles.box}>
                    <img className={styles.img} src={albumIcon} alt='Album Icon' />
                    <h4 className={styles.h4}>Aniket</h4>
                </div>

                
                

                

             </div>
        </div>
        </>
    )
}