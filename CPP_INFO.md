# About C++ 

This document details the info about the C++ version and the state of the standard library

`__cplusplus = 201402`

> stdin will not work, there is no way to pass input to C++ as of right now.

## Working Libraries

```
#include <algorithm>
#include <bitset>
#include <complex>
#include <deque>
#include <exception>
#include <fstream>
#include <functional>
#include <iomanip>
#include <ios>
#include <iosfwd>
#include <iostream>
#include <istream>
#include <iterator>
#include <limits>
#include <list>
#include <locale>
#include <map>
#include <memory>
#include <new>
#include <numeric>
#include <ostream>
#include <queue>
#include <set>
#include <sstream>
#include <stack>
#include <stdexcept>
#include <streambuf>
#include <string>
#include <typeinfo>
#include <utility>
#include <valarray>
#include <vector>
```

## Not working

Any time related libraries will not work, for there is no clock implemented. There is also no way to load in external C++ libraries.

```
#include <chrono>
```

**Please create an issue if you find that one of these libraries do not work**