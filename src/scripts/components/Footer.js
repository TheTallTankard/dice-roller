import tankard from '../../TheTallTankard_Zoomed_NoBackground.png';
import '../../styles/Footer.css';

function Footer () {
    return (
        <div className="Footer">
            <div>
                <strong><a href="https://thetalltankard.github.io">The Tall Tankard</a></strong>
            </div>
            <br/>
            <div>
                <img src={tankard} className="tankard-logo flipped" alt="tankard logo" />
                <img src={tankard} className="tankard-logo" alt="tankard logo" />
            </div>
            <br/>
        </div>
    )
}

export default Footer;