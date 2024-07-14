// ** React Import
import { useEffect } from 'react'

// ** Type Import
import { LayoutProps } from 'src/@core/layouts/types'

// ** Layout Components
import VerticalLayout from './VerticalLayout'

const Layout = (props: LayoutProps) => {
  // ** Props
  const { hidden, children, settings, saveSettings } = props

  useEffect(() => {
    if (!hidden) {
      if (settings.lastLayout !== settings.layout) {
        saveSettings({ ...settings, layout: settings.lastLayout })
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hidden])

  return <VerticalLayout {...props}>{children}</VerticalLayout>
}

export default Layout
