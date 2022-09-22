import Header from '~/components/Layouts/components/Header';

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
