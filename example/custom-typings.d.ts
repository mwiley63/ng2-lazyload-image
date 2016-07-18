declare var ENV: string;
declare var HMR: boolean;
interface GlobalEnvironment {
    ENV;
    HMR;
}

interface ErrorStackTraceLimit {
    stackTraceLimit: number;
}

interface WebpackModule {
    hot: {
        data?: any,
        idle: any,
        accept(dependencies?: string | string[], callback?: (updatedDependencies?: any) => void): void;
        decline(dependencies?: string | string[]): void;
        dispose(callback?: (data?: any) => void): void;
        addDisposeHandler(callback?: (data?: any) => void): void;
        removeDisposeHandler(callback?: (data?: any) => void): void;
        check(autoApply?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
        apply(options?: any, callback?: (err?: Error, outdatedModules?: any[]) => void): void;
        status(callback?: (status?: string) => void): void | string;
        removeStatusHandler(callback?: (status?: string) => void): void;
    };
}

interface WebpackRequire extends NodeRequireFunction {
    context(file: string, flag?: boolean, exp?: RegExp): any;
}

// Extend typings
interface ErrorConstructor extends ErrorStackTraceLimit {}
interface Global extends GlobalEnvironment  {}
interface NodeRequire extends WebpackRequire {}
interface NodeModule extends WebpackModule {}