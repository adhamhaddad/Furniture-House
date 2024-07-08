import mock from './mock'

import './auth/jwt'
import './products'

mock.onAny().passThrough()
