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

export default HeaderLayout;
