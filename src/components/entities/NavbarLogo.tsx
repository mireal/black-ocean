import { Link } from '@mui/material'

export default function NavbarLogo() {
    return (
        <>
            <Link component={'a'} href="/" target="_blank">
                <img
                    src="../src/assets/icons/black_ocean_logo.svg"
                    className="logo"
                    alt="Black ocean logo"
                />
            </Link>
        </>
    )
}
