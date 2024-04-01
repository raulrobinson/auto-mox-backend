module.exports = (sequelize, Sequelize) => {
    return sequelize.define("remote-ocbp", {
        id: {
            type: Sequelize.STRING,
            primaryKey: true,
        },
        PSIGRAM: {
            type: Sequelize.STRING
        },
        PSIGLAM: {
            type: Sequelize.STRING
        },
        PO2FLAM: {
            type: Sequelize.STRING
        },
        CDPPPAM: {
            type: Sequelize.STRING
        },
        PPMCOAM: {
            type: Sequelize.STRING
        },
        PSIG1OM: {
            type: Sequelize.STRING
        },
        PSIG2OM: {
            type: Sequelize.STRING
        },
        PSIG3OM: {
            type: Sequelize.STRING
        },
        PSIG4OM: {
            type: Sequelize.STRING
        },
        PO2G1OM: {
            type: Sequelize.STRING
        },
        PO2G2OM: {
            type: Sequelize.STRING
        },
        PO2G3OM: {
            type: Sequelize.STRING
        },
        PO2G4OM: {
            type: Sequelize.STRING
        },
        PSIGFLO: {
            type: Sequelize.STRING
        },
        PO2GFLO: {
            type: Sequelize.STRING
        },
        PSIGROM: {
            type: Sequelize.STRING
        },
        FECHA: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false
    });
}