#include <iostream>
#include <string>
#include <cctype>

using namespace std;

int main(void) {
    string str;
    cin >> str;
    for(char& c : str) {
        if(isupper(static_cast<unsigned char>(c))) {
            c = static_cast<char>(tolower(static_cast<unsigned char>(c)));
        } else if(islower(static_cast<unsigned char>(c))) {
            c = static_cast<char>(toupper(static_cast<unsigned char>(c)));
        }
        
    }
    
    cout << str;
    return 0;
}