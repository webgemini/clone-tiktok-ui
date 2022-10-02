import PropsTypes from 'prop-types';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import axios from 'axios';

import styles from './Accounts.module.scss';
import AccountItem from './AccountItem';
import * as searchServices from '~/services/searchService';

const cx = classNames.bind(styles);

function Accounts({ label }) {
    const [accounts, setAccounts] = useState([]);
    const [actionStyle, setActionStyle] = useState({ display: 'none', label: 'See more' });

    const handleActionAccount = () => {
        if (actionStyle.display === 'none') {
            setActionStyle({ display: 'block', label: 'See less' });
        } else {
            setActionStyle({ display: 'none', label: 'See more' });
        }
    };

    useEffect(() => {
        const fetchApi = async () => {
            const result = await searchServices.searchApi('s', 'more');
            setAccounts(result);
        };
        fetchApi();
    }, []);

    return (
        <div className={cx('container')}>
            <p className={cx('label')}>{label}</p>
            {accounts.map((result, index) =>
                index < 5 ? (
                    <AccountItem key={result.id} data={result} />
                ) : (
                    <AccountItem key={result.id} style={actionStyle} data={result} />
                ),
            )}
            <div className={cx('show-more')}>
                <p className={cx('see-more')} onClick={handleActionAccount}>
                    {actionStyle.label}
                </p>
            </div>
        </div>
    );
}

Accounts.propTypes = {
    label: PropsTypes.string.isRequired,
};

export default Accounts;
