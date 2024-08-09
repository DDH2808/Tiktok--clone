import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <Image 
                className={cx('avatar')} 
                src='https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/4703b652e37ff95a0a31396e16108dd1~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=39930&refresh_token=635c2e301f5bc5631c0c4300770d5298&x-expires=1723194000&x-signature=yl8XfBTlnVWgPsSM9ZiWrvXOiz8%3D&shp=a5d48078&shcp=81f88b70' 
                alt='Ten' 
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>A Nguyen</span>
            </div>
        </div>
     );
}

export default AccountItem;