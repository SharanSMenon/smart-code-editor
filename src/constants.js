export const startcode = `
import sys, io, traceback
namespace = {}
def run_code(code):
    """run code and return stdout and stderr"""
    out = io.StringIO()
    oldout = sys.stdout
    olderr = sys.stderr
    sys.stdout = sys.stderr = out
    try:
        exec(code, {})
    except:
        traceback.print_exc()
    sys.stdout = oldout
    sys.stderr = olderr
    return out.getvalue()
`

export const languages = ["Python", "C++"]; // c, js, c++ should join soon.