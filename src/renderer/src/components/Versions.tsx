import { useState, version as ReactVersion } from 'react'

function Versions(): JSX.Element {
  const [versions] = useState(window.electron.process.versions)
  const [flashVersion] = useState<string | null>(
    navigator.plugins['Shockwave Flash']?.description.substring('Shockwave Flash '.length) || null
  )

  return (
    <ul className="versions">
      <li className="electron-version">Electron v{versions.electron}</li>
      <li className="chrome-version">Chromium v{versions.chrome}</li>
      <li className="node-version">Node v{versions.node}</li>
      <li className="react-version">React v{ReactVersion}</li>
      {flashVersion && <li className="flash-version">Flash v{flashVersion}</li>}
    </ul>
  )
}

export default Versions
