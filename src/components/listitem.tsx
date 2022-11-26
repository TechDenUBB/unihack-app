import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import styles from '../styles/li.module.scss';
import { faStar, faWifi, faMapPin } from '@fortawesome/free-solid-svg-icons'

export default function ListItem(props: any) {
//TODO: Change map address pin icon to map location pin
    return (
        <li className={styles.container}>
            {props.image ? <div className={styles.imageContainer}><img src={props.image} alt={props.name} className={styles.image} /></div> : null}
            <div className={styles.content}>
                <h1 className={styles.name}>{props.name}</h1>
                <h2 className={styles.wifi}><FontAwesomeIcon icon={faWifi} className={styles.icon}/>{props.password ? "Password needed" : "Open Network"}</h2>
                <h2 className={styles.address}><FontAwesomeIcon icon={faMapPin} className={styles.icon}/>{props.address}</h2>
            </div>
            <h2 className={styles.rating}><FontAwesomeIcon icon={faStar} className={styles.ratingIcon}/>{props.rating}</h2>
                
        </li>
    );
}