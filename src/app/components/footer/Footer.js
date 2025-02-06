import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <footer className="dark:bg-dark-primary bg-light-primary py-5" id="footer">
            <div className="container max-w-6xl mx-auto text-sm flex justify-between">
              <p className="dark:text-dark-footer text-light-footer ">&copy; Todos os direitos reservados - {currentYear}</p>
              <a href="https://github.com/msantosdevlab" target='_blank' className="dark:text-dark-footer dark:hover:text-pinkLogo  text-light-footer hover:text-pinkLogo"> <GitHubIcon  sx={{ fontSize: 25 }} /></a>
           </div>
        </footer>

    );
}