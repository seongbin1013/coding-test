#include <string>
#include <vector>

using namespace std;

vector<int> solution(vector<int> num_list, int n) {
    vector<int> answer;

    for(int i = 0; i < num_list.size(); i+=n) {
        int element = num_list[i];
        answer.push_back(element);
    }
    
    return answer;
}