/**
 * @param {number[]} balance
 */
class Bank {
    constructor(balance) {
        this.balance = balance;
        this.n = balance.length;
    }

    // 계좌번호 검사
    isValidAccount(account) {
        return account >= 1 && account <= this.n;
    }

    // 계좌에 남은 돈 검사
    isValidMoney(account, money) {
        return this.balance[account - 1] >= money;
    }

    transfer(account1, account2, money) {
        if (this.isValidAccount(account1) && this.isValidAccount(account2) && this.isValidMoney(account1, money)) {
            this.balance[account1 - 1] -= money;
            this.balance[account2 - 1] += money;
            return true;
        } else return false;
    }

    deposit(account, money) {
        if (this.isValidAccount(account)) {
            this.balance[account - 1] += money;
            return true;
        } else return false;
    }

    withdraw(account, money) {
        if (this.isValidAccount(account) && this.isValidMoney(account, money)) {
            this.balance[account - 1] -= money;
            return true;
        } else return false;
    }
};


/** 
 * Your Bank object will be instantiated and called as such:
 * var obj = new Bank(balance)
 * var param_1 = obj.transfer(account1,account2,money)
 * var param_2 = obj.deposit(account,money)
 * var param_3 = obj.withdraw(account,money)
 */