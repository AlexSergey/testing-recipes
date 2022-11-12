const path = require('path');
const { spawn } = require('child_process');

// Run using Jest

describe('logger behaviour', () => {
  it('logs out multiple params - 2 strings', done => {
    const testAppFilePath = path.join(
      __dirname,
      '../src/index.ts',
    );
    const testApp = spawn('ts-node', [testAppFilePath])

    testApp.stdout.on('data', (data: Record<string, unknown>) => {
      const stdoutData = JSON.parse(data.toString())
      expect(stdoutData.msg).toBe('param2')
      expect(stdoutData.foo).toBe('bar')
      testApp.kill('SIGINT')
      done()
    })
  })
});
