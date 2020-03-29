// -*- mode: javascript; js-indent-level: 2 -*-

import * as core from '@actions/core'
import {SnapcraftBuilder} from './build'

async function run(): Promise<void> {
  try {
    const path = core.getInput('path')
    core.info(`Building Snapcraft project in "${path}"...`)

    const builder = new SnapcraftBuilder(path)
    await builder.build()
    const snaps = await builder.outputSnap()
    core.setOutput('snap', snaps.join(':'))
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
