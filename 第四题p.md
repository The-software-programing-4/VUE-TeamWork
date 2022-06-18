//读是不写 只有读完才能写

semaphore num=N;//余票数量

int count=0;//记录当前有几个Q访问

semaphore mutex=1;//对count的互斥访问

semaphore w_N=1;//买票锁

Q(){

P(mutex);

if(count==0) 

P(w_N);//锁num，不能买，防止读时，写改变了数

count++;

V(mutex);//解锁count

读余票

P(mutex);

count--；

if(count==0) 

V(w_N);//释放num，可以买

V(mutex);//解锁count

}

B(){

P(w_N);//先检查可不可写

P(N);//买票

V(w_N);

}