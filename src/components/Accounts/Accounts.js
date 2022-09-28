import PropsTypes from 'prop-types';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import styles from './Accounts.module.scss';
import AccountItem from './AccountItem';
import { fakeApi } from '~/components/Contains';

const cx = classNames.bind(styles);

function Accounts({ label }) {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        fetch(fakeApi)
            .then((res) => res.json())
            .then((res) => {
                setAccounts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className={cx('container')}>
            <p className={cx('label')}>{label}</p>
            <div>
                {accounts.map((result) => (
                    <AccountItem key={result.id} data={result} className="account-item" />
                ))}
            </div>
            <div className={cx('show-more')}>
                <p className={cx('see-more')}>See all</p>
            </div>
        </div>
    );
}

Accounts.propTypes = {
    label: PropsTypes.string.isRequired,
};

export default Accounts;
