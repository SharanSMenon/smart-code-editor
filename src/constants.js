/**
 * constants.js
 * Created by Sharan Sajiv Menon
 */

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
` // for python.

export const languages = ["Python", "C++", "C"];

// Data from pyodide site.
export const allPythonPackages = ["asciitree",
    "astropy",
    "atomicwrites",
    "attrs",
    "autograd",
    "beautifulsoup4",
    "biopython",
    "bleach",
    "bokeh",
    "boost-histogram",
    "cffi",
    "cffi_example",
    "CLAPACK",
    "cloudpickle",
    "cmyt",
    "colorspacious",
    "cpp-exceptions-test",
    "cryptography",
    "cssselect",
    "cycler",
    "cytoolz",
    "decorator",
    "distlib",
    "docutils",
    "fonttools",
    "fpcast-test",
    "freesasa",
    "future",
    "html5lib",
    "imageio",
    "iniconfig",
    "jedi",
    "Jinja2",
    "joblib",
    "kiwisolver",
    "lazy-object-proxy",
    "logbook",
    "lxml",
    "MarkupSafe",
    "matplotlib",
    "micropip",
    "mne",
    "more-itertools",
    "mpmath",
    "msgpack",
    "networkx",
    "nlopt",
    "nltk",
    "nose",
    "numcodecs",
    "numpy",
    "openssl",
    "optlang",
    "packaging",
    "pandas",
    "parso",
    "patsy",
    "Pillow",
    "pluggy",
    "py",
    "pyb2d",
    "pycparser",
    "pydantic",
    "pyerfa",
    "Pygments",
    "pyparsing",
    "pyrsistent",
    "pytest",
    "python-dateutil",
    "python-sat",
    "pytz",
    "pywavelets",
    "pyyaml",
    "regex",
    "retrying",
    "scikit-image",
    "scikit-learn",
    "scipy",
    "setuptools",
    "sharedlib-test",
    "sharedlib-test-py",
    "six",
    "soupsieve",
    "sqlalchemy",
    "ssl",
    "statsmodels",
    "swiglpk",
    "sympy",
    "threadpoolctl",
    "tomli",
    "tomli-w",
    "toolz",
    "tqdm",
    "traits",
    "typing-extensions",
    "uncertainties",
    "unyt",
    "webencodings",
    "wrapt",
    "xlrd",
    "yt",
    "zarr"
]