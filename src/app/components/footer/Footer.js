import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer({ data }) {
    const currentYear = new Date().getFullYear();

    return(
      <footer className="dark:bg-darkPrimary bg-light-primary py-5" id="footer">
         <div className="container max-w-6xl mx-auto text-sm flex flex-col gap-4 items-center sm:flex-row sm:justify-between pt-4">
            <p className="dark:text-dark-footer text-light-footer text-center">{data.text} - {currentYear}</p>
            <a href={data.icon_href} target='_blank' className="dark:text-dark-footer dark:hover:text-pinkLogo text-light-footer hover:text-pinkLogo">
            <GitHubIcon sx={{ fontSize: 25 }} />
            </a>
         </div>
      </footer>
    );
}