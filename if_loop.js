// Find the biggest number out of a,b, using if-else condition statement where a = 10, b= 30

if(a>b)
    console.log("a s greater");
else
  if(b>a)
    console.log("b is greater);

// Find the biggest number out of a,b,c using if-else condition statement where a = 10, b= 30, c = 40 
                
if(a>b)
    if(a>c) console.log('a is greater');
    else console.log('c is greater');
else
     if(b>c) console.log('b is greater');
     else console.log('c is greater');


// Find the biggest number out of a,b,c,d using if-else condition statement where a = 10, b= 30, c = 40 & d = -104

if(a>b)
    if(a>c)
        if(a>d) console.log('a is greater');
        else console.log('d is greater');
    else
        if(c>d) console.log('c is greater');
        else console.log('d is greater');
else 
    if(b>c) 
            if(b>d) console.log('b is greater');
            else console.log('d is greater');

    else
            if(c>d) console.log('c is greater');
            else console.log('d is greater');


// Find the biggest number out of a,b,c,d,e using if-else condition statement where a = 10, b= 30, c = 40 & d = -10 & e = 770

if(a>b)
    if(a>c)
        if(a>d)
            if(a>e) console.log('a is greater');
            else console.log('e is greater');
        else
            if(d>e) console.log('d is greater');
            else console.log('e is greater');
    else
        if(c>d)
            if(c>e)console.log('c is greater');
            else console.log('e is greater');
        else
            if(d>e)console.log('d is greater');
            else console.log('e is greater');
else
    if(b>c)
        if(b>d)
            if(b>e) console.log('b is greater');
            else console.log('e is greater');
        else
            if(d>e) console.log('d is greater');
            else console.log('e is greater');
     else
        if(c>d)
            if(c>e) console.log('c is greater');
            else console.log('e is greater');
        else 
            if(d>e) console.log('d is greater');
            else console.log('e is greater');


/ Find the biggest number out of a,b,c,d using if-else condition statement where a = 10, b= 30, c = 40 & d = -10
if(a>b)
    if(a>c)
        if(a>d) console.log('a is greater');
        else console.log('d is greater');
    else
        if(c>d) console.log('c is greater');
        else console.log('d is greater');
else 
    if(b>c) 
            if(b>d) console.log('b is greater');
            else console.log('d is greater');

    else
            if(c>d) console.log('c is greater');
            else console.log('d is greater');
/or

if(a>b && a>c && a>d) console.log('a is greater');
else if (b>a && b>c && b>d) console.log('b is greater');
else if (c>a && c>b && c>d) console.log('c is greater');
else console.log('d is greater')

