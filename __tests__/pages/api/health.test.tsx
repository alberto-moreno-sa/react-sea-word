import health from 'pages/api/health';

describe('Health Api', () => {
  it('Returns success if is working', async () => {
    const req = {} as any;
    const jsonRenderSpy = jest.fn();
    const res = { statusCode: 200, json: jsonRenderSpy } as any;
    await health(req, res);
    expect(res.statusCode).toBe(200);
    expect(jsonRenderSpy).toBeCalledTimes(1);
  });
});
