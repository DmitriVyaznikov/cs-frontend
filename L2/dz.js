const instructions = {
    'SET A': 0,
    'PRINT A': 1,
    'IFN A': 2,
    'RET': 3,
    'DEC A': 4,
    'JMP': 5
};

const program = [
    // Ставим значения аккумулятора в 10
    instructions['SET A'], 20,

    // Выводим значение на экран
    instructions['PRINT A'],

    // Если A равно 0,
    instructions['IFN A'],

    // Программа завершается И возвращает 0
    instructions['RET'], 0,

    // Уменьшаем A на 1
    instructions['DEC A'],

    // Устанавливаем курсор выполняемой инструкции в значение 2
    instructions['JMP'], 2
];

function execute(program) {
    let pc = 0; // Program Counter
    let accumulator = 0;

    while (pc < program.length) {
        const instruction = program[pc];

        switch (instruction) {
            case instructions['SET_A']:
                accumulator = program[++pc];
                break;
            case instructions['PRINT_A']:
                console.log(accumulator);
                break;
            case instructions['IFN_A']:
                if (accumulator !== 0) {
                    pc = program[pc + 1] - 1;
                }
                break;
            case instructions['RET']:
                return program[pc + 1];
            case instructions['DEC_A']:
                accumulator -= 1;
                break;
            case instructions['JMP']:
                pc = program[pc + 1] - 1;
                break;
        }

        pc++;
    }
}

execute(program);