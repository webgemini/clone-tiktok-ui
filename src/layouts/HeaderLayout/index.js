import PropTypes from 'prop-types';
import Header from '~/layouts/components/Header';

function HeaderLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                <div>{children}</div>
            </div>
        </div>
    );
}

HeaderLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderLayout;
